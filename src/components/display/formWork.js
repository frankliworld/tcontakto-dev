import React, {useEffect, useState} from "react";
import { message } from "antd";
import styled from "styled-components";
import { Contact } from "../controllers/contact"
import { Button } from "../buttons/button";
import { themes } from "../styles/ColorsStyle";
import { MediumText, Wrapper } from "../styles/TextStyles";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { Select, Tag } from 'antd';

import image from "../../assets/images/form.jpg";
import { media } from "../io";

const options = [
  { value: 'EJECUTIVO DE VENTAS - TARJETAS DE CRÉDITO'},
  { value: 'EJECUTIVO DE VENTAS - SEGUROS ONCOLOGICOS'},
  { value: 'SUPERVISOR DE VENTAS - PRODUCTOS FINANCIEROS'},
  { value: 'EJECUTIVO DE VENTAS - PRESTAMOS PERSONALES'},
  { value: 'EJECUTIVO DE VENTAS - PAYRROLL'},
  { value: 'EJECUTIVO DE VENTAS - ENTEL EMPRESAS'},
];

export function FormWork(props) {
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");
  const [ruc, setRuc] = useState("");
  const [area, setArea] = useState("");


  const submitHandler = async () => {
    try {
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,3}$/.test(name))
        throw {message: "Ingrese un nombre válido. (Máximo 2 nombres y 2 apellidos, sin carecteres especiales ni acentos)"}
      if (!/^[0-9]{9}$/.test(phone))
        throw {message: "Ingrese un teléfono válido. (números sin espacios de 9 cifras)"}
      if (!/^[0-9]{11}$/.test(ruc))
        throw {message: "Ingrese un RUC válido."}
      if (!/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(email))
        throw {message: "Ingrese un email válido. (example@domain.com)"}
      if (area.length == 0)
        throw {message: "Ingrese un mensaje."}
      setLoader(true);

      let contact = new Contact()
      let response = await contact.add(useState)
      if (!response.STATUS)
        throw {message: response.MESSAGE}
      message.success('Registro exitoso, en breve nos pondremos en contacto.')
    } catch (ex) {
      message.error(ex.message)
    } finally {
      setLoader(false);
    }
  }

  function handleChange(e) {
    console.log("handleChange", e.target.value);
    // setName(e.target.value);
  }

  function tagRender(props) {
    const { label, value, closable, onClose} = props;
    const onPreventMouseDown = event => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  return (
    <Wrapped>
      <Card>
        <Cover src={image}/>
        <ContentForm>
          <Title>Contáctanos</Title>
          <Input id="form-start" type="text" name="Nombre y Apellido" onChange={(e) => setName(e.target.value)}/>
          <All>
            <Input type="number" name="DNI" onChange={(e)=> setRuc(e.target.value)}/>
            <Input type="number" name="Celular" onChange={(e)=> setPhone(e.target.value)}/>
            <Input type="email" name="Correo" onChange={(e)=> setEmail(e.target.value)}/>
            <Input type="file" name="Adjuntar CV" onChange={(e)=> setFile(e.target.value)}/>
            
            {/* <WrappedSelect>
              <Label>¿Experiencia en el area?</Label>
              <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                // defaultValue={['gold', 'cyan']}
                style={{ width: '100%' }}
                options={options}
              />
            </WrappedSelect> */}
            
          </All>
          <WrappedSelect>
              <Label>¿Qué tipo de trabajo desea?</Label>
              <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                // defaultValue={['gold', 'cyan']}
                style={{ width: '100%' }}
                options={options}
              />
            </WrappedSelect>

          {/* <Input area type="text" name="Puesto de interés:" onChange={(e)=> setArea(e.target.value)}/> */}

          <All>
            <Checkbox name="Acepto la Política de Privacidad"/>
            <Button title="Enviar" onButton={submitHandler}/>
          </All>
        </ContentForm>
      </Card>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  width: 100%;
  margin: 80px auto;
`;
const WrappedSelect = styled.div`
  display: grid;
  align-items: center;
  gap: 4px;
`;
const Label = styled(MediumText)`
  color: ${themes.light.gray};
  margin: 0;
  font-size: 16px;
`;
const Card = styled(Wrapper)`
  background: white;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 40px;
  padding: 30px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px auto;
  }
`;
const Title = styled(MediumText)`
  font-weight: bold;
`;
const Cover = (props) => (
  <WrappedCover>
    <Image {...props} />
  </WrappedCover>
);
const WrappedCover = styled.div`
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ContentForm = styled.div`
  display: grid;
  gap: 20px;
`;
const All = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 0;
  @media (${media.mobileM}) {
    grid-template-columns: 1fr;
  }
`;
