
using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Areas.admincp.Controllers
{
    public class LoaiSPController : Controller
    {
        // GET: admincp/LoaiSP
        QLBHEntities db = new QLBHEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult getAllData()
        {
            return Json(new { data = db.loaisps.Select(s => new { s.maloaisp, s.tenloaisp, s.created_at }).ToList() }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpGet]
        public ActionResult GetLoaiSPByID(int id)
        {
            return Json(new { data = db.loaisps.Select(s => new { s.maloaisp, s.tenloaisp, s.created_at, s.updated_at }).FirstOrDefault(x => x.maloaisp == id) }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpPost]
        public ActionResult UpdateLoaiSP(loaisp Loaisp)
        {
            int result = 0;
            try
            {
                //Khachhang.Updated_at = DateTime.Now;
                db.loaisps.Attach(Loaisp);
                db.Entry(Loaisp).State = EntityState.Modified;
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
        public ActionResult SaveLoaiSP(loaisp Loaisp)
        {
            int result = 0;
            try
            {
                db.loaisps.Add(Loaisp);
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
        public ActionResult DeleteLoaiSP(int id)
        {
            var ds = db.loaisps.FirstOrDefault(x => x.maloaisp == id);
            db.loaisps.Remove(ds);
            db.SaveChanges();
            return Json(new { data = "OK" }, JsonRequestBehavior.AllowGet); ;
        }
    }
}