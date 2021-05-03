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
    public class loginController : ApiController
    {

        viajarEntities db = new viajarEntities();//declaracion de la entidad userTablas en "db"

        [HttpGet]
        public int Poderes(string t3312k1)
        {
            usuarios oUsuario = db.usuarios.Where(a => a.token == t3312k1).FirstOrDefault();
            if (oUsuario != null)
            {
                if(oUsuario.tipoUsuario >= 462555)
                {
                    return new Random().Next(462555, 999999); 
                }
                    return oUsuario.tipoUsuario;
            }
            return -999999;
        }

        [HttpPost]
        public string request(formLog formData)
        {
            string emailErr = "emailErr";//devuelve 0 si el email no se encuentra
            string passErr = "passErr";//devuelve 1 si la contraseña es incorrecta
            string logueado;
            usuarios oUsuario = db.usuarios.Find(formData.uemail);
            if (oUsuario != null)//si lo encuentra
            {
                if (System.Web.Helpers.Crypto.VerifyHashedPassword(oUsuario.epassword, formData.epassword) )
                {
                    oUsuario.token = Guid.NewGuid().ToString();//genera el token de inicio de sesion
                    logueado = oUsuario.token;
                    db.SaveChanges();//guarda los cambios en base de datos
                    return logueado;//devuelve los datos del usuario logueado para luego consultar en base de datos
                }
                else
                {
                    return passErr;
                }
            }
             return emailErr; 
        }

    }

}
