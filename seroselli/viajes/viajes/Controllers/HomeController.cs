using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using viajes.Models;

namespace viajes.Controllers
{
    public class HomeController : Controller
    {
        userEntities db = new userEntities();




        [HttpPost]
        public ActionResult login(string user, string pass)
        {
            usuarios logon = db.usuarios.Find(user);
            if(logon.email == user)
            {
                if(logon.epassword == pass)
                {
                    return View("funciona");
                }
            }
            return View("Index");
        }
    }
}