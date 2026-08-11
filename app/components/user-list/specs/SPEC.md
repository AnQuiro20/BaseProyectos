# User List

## Intent
Permitir agregar, listar y eliminar usuarios en una UI pequeña usada para demostraciones y pruebas locales.

## In scope
- Input para agregar un usuario (nombre).
- Listado de usuarios guardados en `localStorage`.
- Eliminación de un usuario.

## Out of scope
- Persistencia en backend.
- Autenticación / permisos.

## Requirements
- Campo de texto con label y botón para agregar.
- Mostrar lista de usuarios con botón para eliminar cada uno.
- Persistencia simple en `localStorage` bajo la key `user_list_v1`.

## Edge cases & errors
- Nombres vacíos no deben añadirse.
- LocalStorage puede fallar (capturar errores silenciosamente y continuar con memoria en sesión).

## Constraints
- Reusar componentes compartidos cuando existan (Button, FormField). En ausencia, usar estilos utilitarios.
- Skills aplicadas: `component-architecture`, `component-standards`.

## Acceptance criteria
- [ ] El componente renderiza un input, botón "Agregar" y una lista vacía inicialmente.
- [ ] Agregar un nombre lo muestra en la lista.
- [ ] Eliminar un nombre lo quita de la lista.
- [ ] Los usuarios persisten tras recargar la página.
