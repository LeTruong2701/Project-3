
using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LTshop.Controllers
{
    public class ShoppingController : Controller
    {
        private QLBHEntities db = new QLBHEntities();
        // GET: Shopping
        public ActionResult Cart()
        {
            return View();
        }
        public ActionResult CheckOut()
        {
            return View();
        }
        public JsonResult CreateHoaDon(hoadonban model)
        {
            try
            {
                model.mahdb = 1/*Guid.NewGuid().ToString()*/;
                if (model.chitiethoadonbans.Count > 0)
                {
                    foreach (var item in model.chitiethoadonbans)
                    {
                        item.mahdb = model.mahdb;
                    }
                }
                db.hoadonbans.Add(model);
                db.SaveChanges();
                return Json(new { ok = 1 }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { ok = 0 }, JsonRequestBehavior.AllowGet);
            }

        }
    }
}