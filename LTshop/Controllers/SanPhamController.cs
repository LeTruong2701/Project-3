using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LTshop.Controllers
{
    public class SanPhamController : Controller
    {
        // GET: SanPham
        private QLBHEntities db = new QLBHEntities();
        public ActionResult DanhSach(string maloaisp)
        {
            ViewBag.maloaisp = maloaisp;
            return View();
        }
        // GET: SanPham
        public ActionResult Chitiet(string MaSP)
        {
            ViewBag.masp = MaSP;
            return View();
        }
        public JsonResult GetChiTiet(int masp)
        {
            var obj = db.sanphams.Select(a => new
            {
                masp = a.masp,
                tensp = a.tensp,
                maloaisp = a.maloaisp,
                giaban = a.giaban,
                dacdiem = a.dacdiem,
                anh = a.anh
                
            }).SingleOrDefault(x => x.masp == masp);
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetDanhSach(int maloaisp, int page, int limit)
        {
            if (page == 0)
                page = 1;

            if (limit == 0)
                limit = int.MaxValue;

            var skip = (page - 1) * limit;

            var list = db.sanphams.Where(x => x.maloaisp == maloaisp).Select(a => new
            {
                masp = a.masp,
                tensp = a.tensp,
                maloaisp=a.maloaisp,
                giaban = a.giaban,
    
                dacdiem = a.dacdiem,
                anh = a.anh
                
            }).OrderBy(x => x.tensp).Skip(skip).Take(limit).ToList();
            var total = db.sanphams.Where(x => x.maloaisp == maloaisp).Count();
            return Json(new { list = list, total = total }, JsonRequestBehavior.AllowGet);
        }
    }
}