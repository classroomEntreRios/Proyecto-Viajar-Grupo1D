using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using viajes.Models;
using viajes.Models.WS;


namespace viajes.Controllers
{
    public class checkTokensController : ApiController
    {
         public viajarEntities db = new viajarEntities();

        [HttpGet]
        public user getData(string token)
        {
            user logueado = new user();

            if (token != null)
            {
                if (token.Length <= 36 && token.Length >= 32)
                {
                    usuarios oUsuario = db.usuarios.Where(a => a.token == token).Single();

                    if (oUsuario != null)
                    {

                        logueado.nombre = oUsuario.nombre;
                        logueado.imaPerfil = oUsuario.imaPerfil;
                        logueado.apellido = oUsuario.apellido;
                        logueado.email = oUsuario.email;
                        logueado.token = oUsuario.token;
                        logueado.otrodato = oUsuario.otrodato;
                        return logueado;
                    }
                }
            }
            logueado.token = "NO";
            return logueado;
        }
    }

   }
 


