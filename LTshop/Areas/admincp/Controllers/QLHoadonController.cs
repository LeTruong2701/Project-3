using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Areas.admincp.Controllers
{
    public class QLHoadonController : Controller
    {
        // GET: admincp/QLHoadon

        QLBHEntities db =new QLBHEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult getAllData()
        {
            return Json(new { data = db.hoadonbans.Select(s => new { s.mahdb, s.makh, s.tenkh, s.diachi, s.sdt, s.tongtien, s.manv,s.ghichu, s.created_at }).ToList() }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpGet]
        public ActionResult GetHoadonByID(int id)
        {
            return Json(new { data = db.hoadonbans.Select(s => new { s.mahdb, s.makh, s.tenkh, s.diachi, s.sdt, s.tongtien, s.manv, s.ghichu, s.created_at }).FirstOrDefault(x => x.mahdb == id) }, JsonRequestBehavior.AllowGet); ;
        }
        [HttpPost]
        public ActionResult UpdateHoadon(hoadonban Hoadonban)
        {
            int result = 0;
            try
            {
                //Khachhang.Updated_at = DateTime.Now;
                db.hoadonbans.Attach(Hoadonban);
                db.Entry(Hoadonban).State = EntityState.Modified;
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
        public ActionResult SaveHoadon(hoadonban Hoadonban)
        {
            int result = 0;
            try
            {
                db.hoadonbans.Add(Hoadonban);
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
        public ActionResult DeleteHoadon(int id)
        {
            var ds = db.hoadonbans.FirstOrDefault(x => x.mahdb == id);
            db.hoadonbans.Remove(ds);
            db.SaveChanges();
            return Json(new { data = "OK" }, JsonRequestBehavior.AllowGet); ;
        }

    }
}