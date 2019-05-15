package com.br.evolucao.os.repository;

import com.br.evolucao.os.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "cliente", collectionResourceRel = "lista")
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}