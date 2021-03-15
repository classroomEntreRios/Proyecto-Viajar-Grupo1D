using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


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
     public IHttpActionResult Add()
        {
            using (Models.userEntities db = new Models.userEntities())
            {
            var oUsuario = new Models.usuarios();
            oUsuario.nombre = "pepde";
            oUsuario.apellido = "argsento";
            oUsuario.email = "argendti@gmail.com";
            oUsuario.epassword = "1234657a8";
            db.usuarios.Add(oUsuario);
            db.SaveChanges();

            return Ok("bien");
            }
            
        }

    }
}
