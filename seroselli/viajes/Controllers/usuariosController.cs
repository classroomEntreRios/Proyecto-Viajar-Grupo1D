using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using viajes.Models;

namespace viajes.Controllers
{
    public class usuariosController : ApiController
    {
    [HttpGet]
    public IHttpActionResult OP()
        {
            return Ok("exito");
        }
    [HttpPost]
     public IHttpActionResult Add(usuarios Form)
        {
            using (Models.userEntities db = new Models.userEntities())
            {
            var oUsuario = new usuarios();
            oUsuario.nombre = Form.nombre;
            oUsuario.apellido = Form.apellido;
            oUsuario.email = Form.email;
            oUsuario.epassword = Form.epassword;
            db.usuarios.Add(oUsuario);
            db.SaveChanges();

            return Ok("Registrado");
            }
            
        }

    }
}
