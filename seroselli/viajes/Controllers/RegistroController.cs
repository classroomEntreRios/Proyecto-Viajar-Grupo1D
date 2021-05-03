using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using viajes.Models;
using viajes.Models.WS;

namespace viajes.Controllers
{
    public class RegistroController : ApiController
    {
        public viajarEntities db = new viajarEntities();

        [HttpGet]
        public bool checkEmail(string email)
        {
            usuarios oUsuario = db.usuarios.Where(a => a.email == email).First();
            if (oUsuario != null)
            {
                return email == oUsuario.email;
            }
            return false;
        }

        [HttpPost]
        public string Nuevo(newUser iUsuario)
        {
            usuarios oUsuario = new usuarios();
            oUsuario.nombre = iUsuario.nombre;
            oUsuario.apellido = iUsuario.apellido;
            oUsuario.epassword = encriptar(iUsuario).ToString();
            int temporary = oUsuario.epassword.Length;
            oUsuario.email = iUsuario.email;
            oUsuario.imaPerfil = iUsuario.imaPerfil;
            oUsuario.fechaAlta = DateTime.Now;
            oUsuario.otrodato = iUsuario.otrodato;
            oUsuario.token = Guid.NewGuid().ToString();
            oUsuario.tipoUsuario = new Random().Next(-462555, 462555);
            db.usuarios.Add(oUsuario);
            try
            {
                db.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {

                Console.WriteLine(e);
            }
            return oUsuario.token;
        }

        private static string encriptar(newUser iUsuario)
        {
            return System.Web.Helpers.Crypto.HashPassword(iUsuario.password);
        }
    }
}
