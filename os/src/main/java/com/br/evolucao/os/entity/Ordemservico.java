package com.br.evolucao.os.entity;

import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Ordemservico {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @ManyToOne
    @RestResource(exported = false)
    Cliente cliente;
    @Column
    Date dtentrada;
    @Column
    String descproblema;
    @Column
    String descsolucao;
    @ManyToOne
    @RestResource(exported = false)
    Servico servico;
    @Column
    String status;

    public Ordemservico() {
    }

    public Ordemservico(Long id, Cliente cliente, Date dtentrada, String descproblema, String descsolucao, Servico servico, String status) {
        this.id = id;
        this.cliente = cliente;
        this.dtentrada = dtentrada;
        this.descproblema = descproblema;
        this.descsolucao = descsolucao;
        this.servico = servico;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Date getDtentrada() {
        return dtentrada;
    }

    public void setDtentrada(Date dtentrada) {
        this.dtentrada = dtentrada;
    }

    public String getDescproblema() {
        return descproblema;
    }

    public void setDescproblema(String descproblema) {
        this.descproblema = descproblema;
    }

    public String getDescsolucao() {
        return descsolucao;
    }

    public void setDescsolucao(String descsolucao) {
        this.descsolucao = descsolucao;
    }

    public Servico getServico() {
        return servico;
    }

    public void setServico(Servico servico) {
        this.servico = servico;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
