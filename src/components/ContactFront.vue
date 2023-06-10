<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
        <div class="green">

            
            Contact
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
</svg>
        </div>

    </template>

    Si vous avez des questions ou si vous avez besoin de plus de détails, n'hésitez pas à me contacter en utilisant le formulaire ci-dessous. Je serai ravi de vous aider !

  </WelcomeItem>

  <WelcomeItem>
    <div class="terminal-body">

      <form>
        <div class="terminal-input">
          <label for="name">Nom :</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="terminal-input">
          <label for="email">Email :</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div class="terminal-input">
          <label for="message">Message :</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" class="terminal-button">Envoyer</button>
      </form>
    </div>
  </WelcomeItem>









</template>
<style scoped>
.terminal-form {
  background-color: #000;
  color: #fff;
  width: 400px;
  padding: 20px;
  font-family: monospace;
}

.terminal-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.terminal-icon {
  background-color: #008000;
  color: #000;
  padding: 5px 10px;
  font-weight: bold;
}

.terminal-body {
  margin-bottom: 20px;
}

.terminal-text {
  margin-bottom: 20px;
}

.terminal-input {
  margin-bottom: 10px;
}

.terminal-input label {
  display: block;
  margin-bottom: 5px;
}

.terminal-input input,
.terminal-input textarea {
  width: 100%;
  padding: 5px;
  font-family: monospace;
}

.terminal-button {
  background-color: #008000;
  color: #000;
  border: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>