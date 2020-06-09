import React, {useEffect, useState} from 'react';
import { Container,  Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Solucion(props) {

  const [modal, setModal] = useState(false);
  const [resultado, setResultado] = useState({text: "", value: ""});
  //const [fibo, setFibo] = useState([0,1]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    props.setIsUrlChildren(window.location.pathname);
    return () => {
      localStorage.setItem("solucionAnima","true")
    };
  });

  function esEntero (valor) {
    let esEntero = false;
    if(valor % 1 === 0 && valor > 0){
      esEntero = true
    }
    return esEntero;
  }


  function ejecutar (valor) {
    if(esEntero(valor)) {
      let arrayResult = buscarFibo(parseInt(valor));
      setResultado({text:"El resultado es: "+arrayResult[arrayResult.length-1], value: "serie de Fibonacci: "+arrayResult.toString()})
      setModal(true)
    } else if (parseInt(valor) === 0) {
      setResultado({text:"El resultado es: 0", value: ""})
      setModal(true)
    } else {
      setResultado({text:"Error.", value: "Error, intenta de nuevo."})
      setModal(true)
    }
    
  }
  

  function buscarFibo (valor){
    let array = [0,1]
    let limit = 1000;
    for (let i = 0; i < limit; i++) {
          let sumNew = array[array.length - 1] + array[array.length - 2];
          if( sumNew <= valor ){
            array.push(sumNew);
          } else {
            break;
          }

    }
    return array;
  }
  return (
    <Container className={(localStorage.getItem("solucionAnima") === "true")? "animate__animated":"animate__animated animate__slideInRight"} >
        <Row xs="12">
          <Col><h2 className="mt-5 text-center titleSi">Solución</h2></Col>
          </Row>
          <Row xs="12">
            <Col>
            <div className="text-dark test-pre">
                <Form className="form-solucion" onSubmit={(e)=>{
                  e.preventDefault();
                  ejecutar(e.target.numero.value)
                }}>
                  <FormGroup>
                    <Label for="exampleNum">Número a buscar mayor que 0 y que sea entero.</Label>
                    <Input autoComplete="off" type="number" required name="numero" id="exampleNum" placeholder="Introduce un número" />
                  </FormGroup>
                  <Button color={"success"}  type="submit" style={{float:"right"}}>Ejecutar función</Button>
                </Form>
              </div>
            </Col>
          </Row>
          <Row xs="12">
          <Col className="text-center">
            <Button color="info" onClick={()=>{window.open('https://mexnube.com/','_blank')}}>Visitar mi Web</Button>
          </Col>
        </Row>
        <div>
          <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>{resultado.text}</ModalHeader>
          <ModalBody>
            <p style={{wordBreak:"break-word"}}>{resultado.value}</p>
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Ok!</Button>
          </ModalFooter>
        </Modal>
        </div>
      </Container>
    );
  }

  export default Solucion;