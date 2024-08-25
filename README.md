# Comandos Básicos de Git

Este documento describe los comandos básicos de Git, una herramienta de control de versiones distribuido que permite a los desarrolladores rastrear cambios en el código fuente a lo largo del tiempo.

## 1. `git init`
Inicializa un nuevo repositorio de Git en el directorio actual.

**Uso común**: Se utiliza al comenzar un nuevo proyecto para empezar a realizar un seguimiento de los archivos con Git.

## 2. `git clone [URL]`
Clona un repositorio existente desde una URL remota (como GitHub) a tu máquina local.

**Uso común**: Crear una copia local de un proyecto existente para empezar a trabajar en él.

## 3. `git add [archivo]`
Añade un archivo específico o archivos al área de preparación (staging area).

**Uso común**: Prepara cambios para ser confirmados en el próximo commit.

## 4. `git commit -m "mensaje"`
Crea un snapshot de los cambios en el área de preparación y lo guarda en el historial de commits.

**Uso común**: Guardar un conjunto de cambios con un mensaje descriptivo sobre lo que se ha cambiado.

## 5. `git status`
Muestra el estado actual del repositorio, incluyendo archivos que han cambiado, cuáles están en el área de preparación y cuáles no.

**Uso común**: Verificar qué archivos han sido modificados y si están listos para ser committeados.

## 6. `git log`
Muestra un historial de commits en el repositorio.

**Uso común**: Revisar el historial de cambios en el proyecto, incluyendo mensajes de commit, autores y fechas.

## 7. `git diff`
Muestra las diferencias entre los archivos modificados y el último commit.

**Uso común**: Comparar los cambios actuales en los archivos con la versión anterior para revisar modificaciones antes de hacer un commit.

## 8. `git branch`
Lista todas las ramas en el repositorio, con un indicador de cuál es la rama activa.

**Uso común**: Ver qué ramas existen en el proyecto y cuál es la rama en la que estás trabajando.

## 9. `git checkout [rama]`
Cambia a una rama específica o revisa un commit específico.

**Uso común**: Cambiar de contexto entre diferentes líneas de desarrollo o trabajar en una rama específica.

## 10. `git merge [rama]`
Fusiona los cambios de una rama específica en la rama activa.

**Uso común**: Integrar cambios de otra rama en la que estás trabajando.

## 11. `git pull`
Actualiza la rama activa trayendo los últimos cambios del repositorio remoto y los fusiona en la rama actual.

**Uso común**: Mantener tu copia local del proyecto actualizada con los cambios realizados por otros colaboradores.

## 12. `git push`
Envía los commits locales al repositorio remoto.

**Uso común**: Compartir tus cambios con otros colaboradores subiéndolos al servidor remoto.

## 13. `git stash`
Guarda temporalmente los cambios no committeados para poder trabajar en otra cosa y luego recuperarlos.

**Uso común**: Cuando necesitas cambiar de rama rápidamente y no quieres perder los cambios actuales.

## 14. `git reset --hard [commit]`
Restablece el repositorio al estado de un commit específico, descartando todos los cambios posteriores.

**Uso común**: Deshacer commits recientes y restaurar el repositorio a un estado anterior.

## 15. `git remote -v`
Muestra las URL de los repositorios remotos asociados al proyecto.

**Uso común**: Verificar qué repositorios remotos están configurados y sus URLs.

## 16. `git fetch`
Descarga los últimos cambios del repositorio remoto, pero no los fusiona con la rama actual.

**Uso común**: Obtener los cambios remotos sin afectar la rama actual, permitiendo revisar lo que se ha actualizado antes de fusionarlo.

## 17. `git rebase [rama]`
Mueve o aplica commits de una rama sobre otra, creando una secuencia lineal de commits.

**Uso común**: Reorganizar commits para crear un historial más limpio y lineal.

## 18. `git rm [archivo]`
Elimina un archivo del repositorio y lo añade a la lista de cambios para el próximo commit.

**Uso común**: Borrar archivos del proyecto de forma controlada por Git.

## 19. `git tag [nombre]`
Crea un marcador o etiqueta en un commit específico, generalmente para marcar versiones de lanzamiento.

**Uso común**: Etiquetar commits importantes, como versiones oficiales del software.

## 20. `git config [opción]`
Configura las opciones de Git a nivel global o de proyecto.

**Uso común**: Establecer configuraciones, como el nombre de usuario y el correo electrónico para los commits, o la forma en que Git maneja las fusiones de archivos.
