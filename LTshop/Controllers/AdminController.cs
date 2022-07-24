using LTshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LTshop.Controllers
{
    public class AdminController : Controller
    {
        private QLBHEntities db = new QLBHEntities();
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult LogOut()
        {
            Session["user"] = null;
            return RedirectToAction("Login", "Admin");
        }
        public ActionResult Login()
        {
            return View();
        }
        public JsonResult AjaxLogin(string username, string password)
        {
            try
            {
                var user = db.users.SingleOrDefault(x => x.username == username && x.password == password);
                if (user != null)
                {
                    Session["user"] = user;
                }
                return Json(new { ok = 1 }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { ok = 0 }, JsonRequestBehavior.AllowGet);
            }

        }
        public JsonResult Login(string username, string password)
        {
            user user = db.users.SqlQuery("select * from user where username='"+username+"' and password='"+password+"'").ToList<user>()[0];
            return Json(user, JsonRequestBehavior.AllowGet);
        }
    }
}