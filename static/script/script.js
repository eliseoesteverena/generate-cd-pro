

document.addEventListener("DOMContentLoaded", () => {
    const $btnEnviar = document.querySelector("#send_data"),
          $inputNameRt = document.querySelector("#name_rt"),
          $inputAddressRt = document.querySelector("#address_rt"),
          $inputCpRt = document.querySelector("#cp_rt"),
          $inputCityRt = document.querySelector("#city_rt"),
          $inputStateRt = document.querySelector("#state_rt"),
          $inputNameDt = document.querySelector("#name_dt"),
          $inputAddressDt = document.querySelector("#address_dt"),
          $inputCpDt = document.querySelector("#cp_dt"),
          $inputCityDt = document.querySelector("#city_dt"),
          $inputStateDt = document.querySelector("#state_dt"),
          $textBodyCd = document.querySelector("#body_cd"),
          $singName = document.querySelector("#sing_name"),
          $singDni = document.querySelector("#sing_dni"),
          $marginLeft = document.querySelector("#margin_left"),
          $marginTop = document.querySelector("#margin_top"),
          $res_margin = document.querySelector("#res_margin");
    //------------------------------------------------------//

    // Restablecer valor predeterminados de los margénes:
    $res_margin.addEventListener("click", function() {
        $marginTop.value = "3.06";
        $marginLeft.value = "1.30";
    });

    // Enviar datos ingresados:
    $btnEnviar.onclick = async () => {
        const nameRt = $inputNameRt.value;
        const addressRt = $inputAddressRt.value;
        const cpRt = $inputCpRt.value;
        const cityRt = $inputCityRt.value;
        const stateRt = $inputStateRt.value;
        const nameDt = $inputNameDt.value;
        const addressDt = $inputAddressDt.value;
        const cpDt = $inputCpDt.value;
        const cityDt = $inputCityDt.value;
        const stateDt = $inputStateDt.value;
        const bodyCd = $textBodyCd.value;
        const singName = $singName.value;
        const singDni = $singDni.value;
        const marginTop = $marginTop.value;
        const marginLeft = $marginLeft.value;

        
        var datos = {
            remitente: {
                name: nameRt,
                adress: addressRt,
                cp: cpRt,
                city:  cityRt,
                state: stateRt
            },
            destinatario: {
                name: nameDt,
                adress: addressDt,
                cp: cpDt,
                city:  cityDt,
                state: stateDt
            },
            cuerpo: {
                body_cd: bodyCd
            },
            firma: {
                name: singName,
                dni: singDni
            },
            margenes: {
                m_top: marginTop,
                m_left: marginLeft
            }
        }
        
        const URL_SERVIDOR = "/new"; // Servidor
        const datosJson =  JSON.stringify(datos);
        console.log(datosJson);
        try {
            const response = await fetch(URL_SERVIDOR, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: datosJson,
            });
            
            const respuesta = await response.text();
            console.log("El servidor dijo: " + respuesta)
            window.open('cd/' + respuesta, '_blank');
        }
        catch (e) {
            console.log("Error en el servidor: " + e.message);
        }   
    };
    function openCD(respuesta) {
        var win = window.open('cd/' + respuesta, '_blank');
       // win.focus();
      }
});
