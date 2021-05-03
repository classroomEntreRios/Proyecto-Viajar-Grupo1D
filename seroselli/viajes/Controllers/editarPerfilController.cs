using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using viajes.Models;
using viajes.Models.WS;

namespace viajes.Controllers
{

    public class editarPerfilController : ApiController
    {
        public viajarEntities db = new viajarEntities();
        public bool checkEmail(string email)
        {
            usuarios oUsuario = db.usuarios.Where(a => a.email == email).FirstOrDefault();
            if (oUsuario != null)
            {
                return email == oUsuario.email;
            }
            return false;
        }

        
        [HttpPost]
        public bool ReemplazarPerfil(user usuario)
        {
            usuarios eUsuario = db.usuarios.Find(usuario.email);
            if(eUsuario != null)
            {
                eUsuario.nombre = usuario.nombre;
                eUsuario.apellido = usuario.apellido;
                eUsuario.otrodato = usuario.otrodato;
                eUsuario.imaPerfil = usuario.imaPerfil;
                db.SaveChanges();
                return true;
            }
            return false;

        }

    }
}
