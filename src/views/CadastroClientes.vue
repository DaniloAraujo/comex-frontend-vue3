<template>
    <h2 class="text-center mt-3">Cadastrar Cliente</h2>
    <form action="#" method="post" class="container" @submit.prevent="salvaCliente">
        <div class="d-flex">
            <div class="col-md-5 me-3">
                <label for="nomeCliente" class="form-label">Nome</label>
                <input type="text" v-model="clienteNome" class="form-control" name="nomeCliente" required minlength="2">
            </div>
            <div class="col me-3">
                <label for="sobrenomeCliente" class="form-label">Sobrenome</label>
                <input type="text" v-model="clienteSobrNome" class="form-control" name="sobrenomeCliente" required
                    minlength="2">
            </div>
            <div class="col">
                <label for="cpfCliente" class="form-label">CPF</label>
                <input type="text" ref="inputCpf" v-model="clienteCpf" class="form-control" name="cpfCliente" data-regra="cpf" required>
                <span id="msgAlerta"></span>
            </div>
        </div>
        <div class="d-flex mt-3">
            <div class="me-3 col">
                <label for="telefoneCliente" class="form-label">Telefone</label>
                <input type="text" ref="inputTel" v-model="clienteTel" class="form-control" name="telefoneCliente">
            </div>
            <div class="me-3 col">
                <label for="emailCliente" class="form-label">Email</label>
                <input type="text" v-model="clienteEmail" class="form-control" name="emailCliente" required
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$">
            </div>
            <div class="col">
                <div>
                    <label for="cepCliente" class="form-label">CEP</label>
                    <div class="d-flex">
                        <input type="text" ref="inputCep" v-model="clienteCep" class="form-control rounded-0 rounded-start-2"
                            name="cepCliente" required>
                        <button type="button" @click.prevent="recuperaEndereco" class="btn btn-primary rounded-0 rounded-end-2">Buscar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="endereco mt-3">
            <div class="d-flex">
                <div class="col-md-4 me-3">
                    <label for="cidade" class="form-label">Cidade</label>
                    <input type="text" v-model="endCidade" class="form-control" name="cidade" required disabled>
                </div>
                <div class="col me-3">
                    <label for="bairro" class="form-label">Bairro</label>
                    <input type="text" v-model="endBairro" class="form-control" name="bairro" required>
                </div>
                <div class="col me-3">
                    <label for="bairro" class="form-label">Logradouro</label>
                    <input type="text" v-model="endLogradouro" class="form-control" name="logradouro" required>
                </div>
                <div class="col-md-1 me-3">
                    <label for="estado" class="form-label">UF</label>
                    <input type="text" v-model="endUf" class="form-control" name="estado" required disabled
                        minlength="2" maxlength="2">
                </div>
            </div>

            <div class="d-flex mt-3">
                <div class="col-auto me-3">
                    <label for="numero" class="form-label">Numero</label>
                    <input type="text" v-model="endNumero" class="form-control" name="numero">
                </div>
                <div class="col-auto me-3">
                    <label for="complemento" class="form-label">Complemento</label>
                    <input type="text" v-model="endComplemento" class="form-control" name="complemento">
                </div>
            </div>
        </div>
        <div class="col-auto text-center mt-3">
            <button type="submit" class="btn btn-primary ps-5 pe-5">Salvar</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import IMask from 'imask';

import { apiBuscaEndereco } from '@/services/cliente-service';
import { criaCliente, criaEndereco } from '@/models/cliente';
import { apiSalvaCliente } from '@/services/cliente-service';

const clienteNome = ref('');
const clienteSobrNome = ref('');
const clienteCpf = ref('');
const clienteTel = ref('');
const clienteEmail = ref('');

function salvaCliente() {
    const endereco = criaEndereco(
        clienteCep.value,
        endCidade.value,
        endBairro.value,
        endLogradouro.value,
        endUf.value,
        endComplemento.value,
        endNumero.value
    );

    const novoCliente = criaCliente(
        clienteNome.value,
        clienteSobrNome.value,
        clienteCpf.value,
        clienteTel.value,
        clienteEmail.value,
        endereco
    );

    apiSalvaCliente(novoCliente)
        .then(() => {
            clienteNome.value = '';
            clienteSobrNome.value = '';
            clienteCpf.value = '';
            clienteTel.value = '';
            clienteEmail.value = '';

            clienteCep.value = '';
            endCidade.value = '';
            endBairro.value = '';
            endLogradouro.value = '';
            endUf.value = '';
            endNumero.value = '';
            endComplemento.value = '';
        });
};

const clienteCep = ref('');
const endCidade = ref('');
const endBairro = ref('');
const endLogradouro = ref('');
const endUf = ref('');
const endNumero = ref('');
const endComplemento = ref('');

async function recuperaEndereco() {
    const buscaEndereco = await apiBuscaEndereco(clienteCep.value)
    preencheEndereco(buscaEndereco)
};

function preencheEndereco(data: any): void {
    endCidade.value = data.localidade;
    endBairro.value = data.bairro;
    endLogradouro.value = data.logradouro;
    endUf.value = data.uf;
    endComplemento.value = data.complemento;
};

/* <---------------------> Mascara para os inputs <---------------------> */
const inputCpf = ref<HTMLInputElement | null>(null);
const inputTel = ref<HTMLInputElement | null>(null);
const inputCep = ref<HTMLInputElement | null>(null);

onMounted(() => {
    if (inputCpf.value) {
        const mascara = IMask(inputCpf.value, {
            mask: '000.000.000-00',
        });
        mascara.on('accept', () => {
            clienteCpf.value = mascara.value;
        });
    } else {
        console.log('erro no input cpf.');
    };

    if (inputTel.value) {
        const mascara = IMask(inputTel.value, {
            mask: [
                { mask: '(00) 0000-0000' },
                { mask: '(00) 00000-0000' }
            ]
        });
        mascara.on('accept', () => {
            clienteTel.value = mascara.value;
        });
    } else {
        console.log('erro no input telefone.');
    };

    if (inputCep.value) {
        const mascara = IMask(inputCep.value, {
            mask: '00000-000'
        });
        mascara.on('accept', () => {
            clienteCep.value = mascara.value;
        });
    } else {
        console.log('erro no input telefone.');
    };
});
</script>