
using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Areas.admincp.Controllers
{
    public class QLSanphamController : Controller
    {
        // GET: admincp/Sanpham
        QLBHEntities db = new QLBHEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult getAllData()
        {
            return Json(new { data = db.sanphams.Select(s => new { s.masp, s.tensp, s.maloaisp, s.giaban, s.size, s.dacdiem, s.anh, s.created_at,s.updated_at }).ToList() }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpGet]
        public ActionResult GetSanphamByID(int id)
        {
            return Json(new { data = db.sanphams.Select(s => new { s.masp, s.tensp, s.maloaisp, s.giaban, s.size, s.dacdiem, s.anh, s.created_at, s.updated_at }).FirstOrDefault(x => x.masp == id) }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpPost]
        public ActionResult UpdateSanpham(sanpham Sanpham)
        {
            int result = 0;
            try
            {
                //Khachhang.Updated_at = DateTime.Now;
                db.sanphams.Attach(Sanpham);
                db.Entry(Sanpham).State = EntityState.Modified;
                db.SaveChanges();
                result = 1;
            }
            catch (Exception e)
            {
                result = 0;
            }
            return Json(new { kq = "200", result = result }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult SaveSanpham(sanpham Sanpham)
        {
            int result = 0;
            try
            {
                db.sanphams.Add(Sanpham);
                db.SaveChanges();
                result = 1;
            }
            catch (Exception e)
            {
                result = 0;
            }
            //return Request.CreateResponse(HttpStatusCode.OK, result);
            return Json(new { kq = "200", result = result }, JsonRequestBehavior.AllowGet); ;
        }

        [HttpGet]
        public ActionResult DeleteSanpham(int id)
        {
            var ds = db.sanphams.FirstOrDefault(x => x.masp == id);
            db.sanphams.Remove(ds);
            db.SaveChanges();
            return Json(new { data = "OK" }, JsonRequestBehavior.AllowGet); ;
        }
    }
}