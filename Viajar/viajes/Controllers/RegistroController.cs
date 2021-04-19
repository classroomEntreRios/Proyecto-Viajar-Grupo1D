using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using viajes.Models;

namespace viajes.Controllers
{
    public class RegistroController : ApiController
    {
        [HttpGet]
        public string Nuevo(string nombre, string apellido, string email, string password)
        {

            userEntities db = new userEntities();
            usuarios oUsuario = new usuarios();
            oUsuario.nombre = nombre;
            oUsuario.apellido = apellido;
            oUsuario.email = email;
            oUsuario.epassword = password;
            oUsuario.fechaAlta = DateTime.Now;
            db.usuarios.Add(oUsuario);
            db.SaveChanges();


            return "Hecho!";
        }



    }
}
