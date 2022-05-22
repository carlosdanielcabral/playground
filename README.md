# Playground

## Clonando a aplicação
```bash
git clone git@github.com:carlosdanielcabral/playground.git
```

## Executando a aplicação

```bash
docker-compose up -d
```

Depois, para rodar os testes:

Backend:
```bash
docker exec -ti backend_compose npm test
```

Frontend:
```bash
docker exec -ti frontend_compose npm test
```
