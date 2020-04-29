let num_ejercicio = +prompt("Ingrese el número de ejercicio : (2) Ejercicio 3.2 (3) Ejercicio 3.3 (4) Ejercicio 3.4 (8) Ejercicio 3.8 (9) Ejercicio 3.9 (11) Ejercicio 3.11 ");

switch (num_ejercicio) {
    case 2:
        // 3.2 Realice un algoritmo para determinar el sueldo semanal de un trabajador
        // con base en las horas trabajadas y el pago por hora, considerando que después
        // de las 40 horas cada hora se considera como excedente y se paga el doble. 

        let horas_trabajadas = +prompt("Ingrese la cantidad de horas trabajadas");
        let pago_x_horas = +prompt("Ingrese el pago por hora");
        let total_a_pagar = 0;

        if (horas_trabajadas >= 40) {
            total_a_pagar = (40 * pago_x_horas) + ((horas_trabajadas - 40) * 2 * pago_x_horas);
        }
        else {
            total_a_pagar = horas_trabajadas * pago_x_horas;
        }

        console.log("--------------------------------------");
        console.log(`Sueldo semanal : ${total_a_pagar}`);
        console.log("--------------------------------------");

        break;

    case 3:
        let monto = +prompt("¿Cuánto dinero dispone?");


        if (monto <= 10) {
            console.log("De acuerdo al monto disponible, Ud. puede comprar Tarjeta.");
        }
        else {
            if (monto >= 11 && monto <= 100) {
                console.log("De acuerdo al monto disponible, Ud. puede comprar Chocolates.");
            }
            else {
                if (monto >= 101 && monto <= 250) {
                    console.log("De acuerdo al monto disponible, Ud. puede comprar Flores.");
                }
                else {
                    console.log("De acuerdo al monto disponible, Ud. puede comprar Anillo.");
                }
            }
        }

        break;

    case 4:
        let num_horas = +prompt("Indique la cantidad de horas por el uso del estacionamiento");
        let resultado4 = 0;
        if (num_horas > 2) {
            resultado4 = resultado4 + (2 * 5);
            num_horas = num_horas - 2;
            if (num_horas > 3) {
                resultado4 = resultado4 + (3 * 4);
                num_horas = num_horas - 3;
                if (num_horas > 5) {
                    resultado4 = resultado4 + (5 * 3);
                    num_horas = num_horas - 5;
                    if (num_horas > 0) {
                        resultado4 = resultado4 + (num_horas * 2);
                    }
                }
                else {
                    resultado4 = resultado4 + (num_horas * 3);
                }
            }
            else {
                resultado4 = resultado4 + (num_horas * 4);
            }
        }
        else {
            resultado4 = num_horas * 5;
        }
        console.log("--------------------------------------");
        console.log(`Total a cobrar por el uso del estadionamiento : $  ${resultado4}`);
        console.log("--------------------------------------");

        break;

    case 8:
        let sueldo = +prompt("Indique el sueldo del trabajador");
        let antiguedad = +prompt("Indique la antigüedad del trabajador");
        let resultado8_antiguedad = 0;
        let resultado8_sueldo = 0;

        // Bono según antigüedad
        if (antiguedad >= 2 && antiguedad < 5) {
            resultado8_antiguedad = sueldo * 0.20;
        }
        else {
            if (antiguedad >= 5) {
                resultado8_antiguedad = sueldo * 0.30;
            }
        }

        // Bono según sueldo
        if (sueldo < 1000) {
            resultado8_sueldo = sueldo * 0.25;
        }
        else {
            if (sueldo >= 1000 && sueldo <= 3500) {
                resultado8_sueldo = sueldo * 0.15;
            }
            else {
                resultado8_sueldo = sueldo * 0.10;
            }
        }

        // El mayor de los bonos
        if (resultado8_antiguedad >= resultado8_sueldo) {
            console.log("--------------------------------------");
            console.log(`Bono por antigüedad : $  ${resultado8_antiguedad}`);
            console.log("--------------------------------------");
        }
        else {
            console.log("--------------------------------------");
            console.log(`Bono por sueldo : $  ${resultado8_sueldo}`);
            console.log("--------------------------------------");
        }

        break;

    case 9:
        let poliza = prompt("Indicar tipo de póliza (A) Cobertura Amplia, (B) Daños a tercero.")
        let cuota_base = 0;
        let costo_total = 0;

        if (poliza === 'A') {
            cuota_base = 1200;
        }
        else {
            if (poliza === 'B') {
                cuota_base = 950;
            }
        }

        if (poliza === 'A' || poliza === 'B') {
            costo_total = cuota_base;

            let p1 = prompt("La persona que conduce tiene por hábito beber alcohol? (S) SI N (NO)");
            if (p1 === "S") {
                costo_total = costo_total + (cuota_base * 0.10);
            }

            let p2 = prompt("La persona que conduce utiliza lentes? (S) SI N (NO)");
            if (p2 === "S") {
                costo_total = costo_total + (cuota_base * 0.05);
            }

            let p3 = prompt("La persona que conduce padece alguna enfermedad como deficiencia cardiaca o diabetes? (S) SI N (NO)");
            if (p3 === "S") {
                let p3_1 = prompt("Tiene más de 40 años? (S) SI N (NO)");
                if (p3_1 === "S") {
                    costo_total = costo_total + (cuota_base * 0.20);
                }
                else {
                    costo_total = costo_total + (cuota_base * 0.10);
                }
            }

            console.log("--------------------------------------");
            console.log(`Costo póliza ${poliza} : $  ${costo_total}`);
            console.log("--------------------------------------");
        }
        break;

    case 11:
        let antiguedad2 = +prompt("Indique la antigüedad del trabajador");

        if (antiguedad2 <= 5) {
            console.log(`Bono : $  ${antiguedad2 * 100}`);
        }
        else {
            console.log(`Bono : $  1000`);
        }

        break;

    default:
        console.log("Error");

}