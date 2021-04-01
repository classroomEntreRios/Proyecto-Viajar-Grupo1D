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
    public class usuariosController : ApiController
    {
        readonly userEntities db = new userEntities();

        [HttpGet]
        public Logueado Logan()
        {
            Logueado nombreUsuario = new Logueado { nombre = "Iniciar Sesion", imaPerfil = "", token = "" };
            return nombreUsuario;
        }

        [HttpPost]
        public int Logon(formLog formData)
        {
            int emailErr = 0;
            int passErr = 1;
            int passOk = 2;
            usuarios oUsuario = db.usuarios.Where(a => a.email == formData.uemail).FirstOrDefault();
            if(oUsuario != null)
            {
                if (oUsuario.email == formData.uemail)
                {
                    if(oUsuario.epassword == formData.epassword)
                    {
                        this.logueado.nombre = oUsuario.nombre + ", " + oUsuario.apellido;
                        return passOk;
                    }
                    else
                    {
                        
                        return passErr;

                    }
                }
                else
                {
                   return emailErr;
                }

            }
            else
            {
             return emailErr; 
            }
           
        }

    }

}
