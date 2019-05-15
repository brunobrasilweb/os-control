package com.br.evolucao.os.repository;

import com.br.evolucao.os.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "usuario", collectionResourceRel = "lista")
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByLoginAndSenha(String login, String senha);
}
