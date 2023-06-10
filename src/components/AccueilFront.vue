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
    <template #heading>Moi</template>

    Je suis David LI, j'ai 20 ans et je suis actuellement en seconde année de BTS SIO option SLAM (Solutions Logicielles et Application Métier) au
    <a href="https://www.lyceedecachan.fr/" target="_blank" rel="noopener">Lycée Polyvalent de Cachan</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      Centres d'intérêts
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16"><path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path></svg>
    </template>

    Musculation en salle, Passion pour les jeux vidéos (FPS) , intérêt pour les produits high-tech (PC)

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      Réseaux sociaux 
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16"><path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"></path></svg>
    </template>

    Github:
    <a href="https://github.com/BanggEddy" target="_blank" rel="noopener">@BanggEddy</a>
    <br />
    Instagram:
    <a href="https://www.instagram.com/cookie02_10/" target="_blank" rel="noopener">@cookie02_10</a>
    <br />
    Linkedin
    <a href="https://www.linkedin.com/in/david-li-2273b5235/" target="_blank" rel="noopener">@David LI</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Parcours</template>
      2023-2024 ||
        <a href="https://www.efrei.fr/programmes-experts/bachelor-concepteur-developpeur/" target="_blank" rel="noopener">EFREI</a> ||
      : 
      Bachelor 3 Développement web & application
    <br /><br />

    2021-2023 ||
        <a href="https://www.lyceedecachan.fr/" target="_blank" rel="noopener">Lycée de Cachan</a> ||
      : 
    BTS SIO (Services Informatiques au Organisations) SLAM (Développement web et le Développement d’Applications Mobiles).
  </WelcomeItem>

</template>
