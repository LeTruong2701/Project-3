
using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Areas.admincp.Controllers
{
    public class KhachhangController : Controller
    {
        // GET: admincp/Khachhang
        //Model1 db = new Model1();
        QLBHEntities db = new QLBHEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult getAllData()
        {
            return Json(new { data = db.khachhangs.Select(s => new { s.makh, s.tenkh, s.gioitinh, s.namsinh, s.diachi, s.sdt, s.email,s.created_at }).ToList() }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpGet]
        public ActionResult GetKhachhangByID(int id)
        {
            return Json(new { data = db.khachhangs.Select(s => new { s.makh, s.tenkh, s.gioitinh, s.namsinh, s.diachi, s.sdt, s.email, s.created_at }).FirstOrDefault(x => x.makh == id) }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpPost]
        public ActionResult UpdateKhachhang(khachhang Khachhang)
        {
            int result = 0;
            try
            {
                //Khachhang.Updated_at = DateTime.Now;
                db.khachhangs.Attach(Khachhang);
                db.Entry(Khachhang).State = EntityState.Modified;
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
        public ActionResult SaveKhachhang(khachhang Khachhang)
        {
            int result = 0;
            try
            {
                db.khachhangs.Add(Khachhang);
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
        public ActionResult DeleteKhachhang(int id)
        {
            var ds = db.khachhangs.FirstOrDefault(x => x.makh == id);
            db.khachhangs.Remove(ds);
            db.SaveChanges();
            return Json(new { data = "OK" }, JsonRequestBehavior.AllowGet); ;
        }
    }
}