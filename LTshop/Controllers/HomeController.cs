
using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LTshop.Controllers
{
    public class HomeController : Controller
    {
        private QLBHEntities db = new QLBHEntities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetLoaiSP()
        {
            var list = db.loaisps.Select(a => new
            {
                maloaisp = a.maloaisp,
                tenloaisp = a.tenloaisp,
               
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetSPMoi()
        {
            var list = db.sanphams.OrderByDescending(x => x.masp).Select(a => new
            {
                masp = a.masp,
                tensp = a.tensp,
                maloaisp = a.maloaisp,
                giaban = a.giaban,
                size=a.size,
                dacdiem=a.dacdiem,
                anh=a.anh
            }).Take(5).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }




        public JsonResult GetSPQuanao()
        {
            var list = db.sanphams.Where(x=>x.maloaisp==1).Select(a => new
            {
                masp = a.masp,
                tensp = a.tensp,
                maloaisp = a.maloaisp,
                giaban = a.giaban,
                size = a.size,
                dacdiem = a.dacdiem,
                anh = a.anh
            }).Take(8).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }


        public JsonResult GetSPGiay()
        {
            var list = db.sanphams.Where(x => x.maloaisp == 2).Select(a => new
            {
                masp = a.masp,
                tensp = a.tensp,
                maloaisp = a.maloaisp,
                giaban = a.giaban,
                size = a.size,
                dacdiem = a.dacdiem,
                anh = a.anh
            }).Take(8).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }


        public JsonResult GetSPPhukien()
        {
            var list = db.sanphams.Where(x => x.maloaisp == 3).Select(a => new
            {
                masp = a.masp,
                tensp = a.tensp,
                maloaisp = a.maloaisp,
                giaban = a.giaban,
                size = a.size,
                dacdiem = a.dacdiem,
                anh = a.anh
            }).Take(8).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        //public JsonResult GetSPXem()
        //{
        //    var list = db.SanPhams.OrderByDescending(x => x.Xem).Select(a => new
        //    {
        //        MaSP = a.MaSP,
        //        TenSP = a.TenSP,
        //        Anh = a.Anh,
        //        Gia = a.Gia
        //    }).ToList();
        //    return Json(list, JsonRequestBehavior.AllowGet);
        //}
    }
}