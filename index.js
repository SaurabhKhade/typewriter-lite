function animatedTyping(params) {

  let {
    element,
    text_array,
    write_delay = 500,
    remove_delay = 500,
    write_delay_per_char = 100,
    remove_delay_per_char = 100
  } = params;

  let text_index = 0;
  let character_index = 0;
  let text_to_write;
  
  element.innerText = "";
  
  function text_typer() {

    text_to_write = texts_array[text_index];
    let characters_in_text = text_to_write.length;
    let character_typer_interval = setInterval(character_typer, write_delay_per_char);
    
    function character_typer() {
      if (text_to_write[character_index]===' ') {
        element.innerHTML += '&nbsp;';
        character_index++;
      } else {
        element.innerText += text_to_write[character_index++];
      }
      if (character_index === characters_in_text) {
        clearInterval(character_typer_interval);
        setTimeout(text_remover, remove_delay);
      }
    }
  }
  
  function text_remover() {
    let character_remover_interval = setInterval(character_remover, remove_delay_per_char);
    
    function character_remover() {
      element.innerText = text_to_write.slice(0, --character_index);

      if (character_index === 0) {
        clearInterval(character_remover_interval);
        text_index = (text_index+1)%texts_array.length;
        setTimeout(text_typer, write_delay);
      }
    }
  }
  
  setTimeout(text_typer, write_delay);
}

module.exports = animatedTyping