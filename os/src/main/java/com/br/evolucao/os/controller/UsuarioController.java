package com.br.evolucao.os.controller;

import com.br.evolucao.os.entity.Usuario;
import com.br.evolucao.os.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @RequestMapping(value = "/login/{login}/{senha}", method = RequestMethod.GET)
    public Usuario info(@PathVariable("login") String login, @PathVariable("senha") String senha) {
        return usuarioRepository.findByLoginAndSenha(login, senha);
    }

}
