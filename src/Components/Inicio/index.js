import React, {useEffect} from 'react';
import { Container,  Row, Col, Button } from 'reactstrap';
//import imgprueba from './img/prueba.png'
import {useHistory} from 'react-router-dom'
function Inicio(props) {
  let history = useHistory();
    
  useEffect(() => {
    props.setIsUrlChildren(window.location.pathname);
    localStorage.setItem("solucionAnima","false")
  });
  
  return (

<Container className="animate__animated animate__fadeIn" >

      <Row xs="12">
      <Col><h2 className="mt-5 text-center titleSi">Test Shopper</h2></Col>
      </Row>
      <Row xs="12">
        <Col>
        <div className="text-dark test-pre">
          <p>
          <br /> 
          Prueba de conocimiento de tecnologías FrontEnd (Vue.JS) <br /> <br />
          1. Genera una solución con las siguientes tecnologías: <br /> <br />
          - Vue.JS (Vuex, Axios, BootstrapVue, Vue Material, etc) <br /> <br />
          2. Planteamiento del problema: <br /> <br />
          a. Recibe un número del conjunto de los números Enteros mayores a cero: “número”:6 <br /> <br />
          b. Se regresa un número inmediato de la serie de Fibonacci(0,1), menor o igual: “fibonacci”:5 <br /> <br />
          c. Las funciones internas que resuelvan el problema deben tener la característica de ser <br /> <br />
          recursivas. <br /> <br />
          Ejemplos: <br /> <br />
          a. n=0 => f=0, <br /> <br />
          b. n=1 => f=1, <br /> <br />
          c. n=6 => f=5, <br /> <br />
          d. n=8 => f=8, <br /> <br />
          e. n=5.5 => f=Error <br /> <br />
          3. La vista mostrará un formulario maquetado con componentes de: BootstapVue o Vue <br /> <br />
          Material (headers, input, button, textArea, sweetAlert, etc), para solicitud de número a buscar <br /> <br />
          y recepción del resultado; con sus respectivos mensajes de error y confirmación. <br /> <br />
          4. Comparte tu propuesta de solución en GitHub <br /> <br />
          5. Se calificará buenas prácticas, patrones de diseño, manejo de git, etc. <br /> <br />
          </p>
          </div>
        </Col>
      </Row>
      <Row xs="12">
      <Col className="text-center">
        <Button color="info" onClick={()=>{history.push("/solucion")}}>Ir a la solución</Button>
      </Col>
      </Row>
    </Container>
    );
  }

  export default Inicio;
  