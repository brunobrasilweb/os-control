package com.br.evolucao.os.repository;

import com.br.evolucao.os.entity.Ordemservico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "ordem-servico", collectionResourceRel = "lista")
public interface OrdemservicoRepository extends JpaRepository<Ordemservico, Long> {
}
