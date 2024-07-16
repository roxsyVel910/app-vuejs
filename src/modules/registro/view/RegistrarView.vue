<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for=" nombre">Nombre:</label>
        <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
    </div>
    <div class="form">
        <label for="correo">Correo:</label>
        <Field type="email" name="email" placeholder=" ingrese su email" />
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>
<script setup>
import {Form, Field, ErrorMessage}  from 'vee-validate';
import {schema} from '../schemas/validationSchemas';
const onSubmit = () => {
    console.log(`se ha enviado el formulario`);
}
</script>

<style>
.form {
    padding-bottom: 10px;
}
</style>
