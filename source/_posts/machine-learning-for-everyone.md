---
layout: article
title: L'apprentissage automatique, simplement et avec des exemples concrets.
date: 2021-10-07 15:45:21
tags:
---

L'apprentissage automatique (ou "machine learning" en anglais) c'est comme le sexe au lycée. Tout le monde en parle, peu savent ce qu'il faut faire et seul votre professeur le fait. Si vous avez déjà essayé de lire des articles sur l'apprentissage automatique, il est fort probable que vous soyez tombé sur deux types de contenue : de grosses trilogies académiques remplie de théorèmes (je n'ai même pas pu en comprendre la moité) ou des contes de fées douteux sur *l'intelligence artificielle*, *la magie de la science des données* et *les métiers du futurs*.

J'ai décidé d'écrire un article dont je souhaitais l'existence depuis longtemps. Une introduction simple pour ceux qui ont toujours voulu comprendre l'apprentissage automatique. Avec des problèmes concrets, des solutions pratiques, un langage simple et sans théorèmes de haut niveau. Un et pour tous. Que vous soyez développeur ou manager.

C'est parti.

<img alt="Les deux types d'articles sur le machine learning" src="/images/machine-learning-for-everyone/01.jpg">

## Pourquoi voulons-nous que les machines apprennent ?

Voici Billy. Billy veut acheter une voiture. Il essaie de calculer combien il doit économiser par mois pour l'avoir. Il a parcouru des dizaines d'annonces sur Internet et a appris que les voitures neuves coûtent environ 20 000 dollars, les voitures d'occasion d'un an 19 000 dollars, celles de deux ans 18 000 dollars et ainsi de suite.

Billy, notre brillant analyste, commence à observer un schéma : *le prix de la voiture dépend de son âge et baisse de 1 000 dollars chaque année, mais ne descend pas en dessous de 10 000 dollars.*

En termes d'apprentissage automatique, Billy a inventé la *regression*, il a prédit une valeur (le prix) par rapport à des données connues. Les gens le font tout le temps, quand ils essayent d'estimer un prix raisonnable d'un iPhone d'occasion sur eBay ou de déterminer combien il y a de côtes à acheter pour une soirée barbecue. 200 grammes par personnes ? 500 ?

Oui, ce serait cool d'avoir une formule simple pour résoudre tous les problèmes du monde. En particulier, pour une soirée barbecue. Malheureusement, c'est impossible.

Revenons aux voitures. Le problème est qu'elles ont des dates de fabrication différentes, des douzaines d'options, des conditions techniques, des pics de demande saisonniers et Dieu seul sait combien de facteurs cachés il y a en plus. Un Billy moyen ne peut pas garder toutes ces données en tête lorsqu'il calcule le prix. Moi aussi.

Les gens sont bêtes et paresseux, nous avons besoin de robots pour faire des maths à leurs places. Alors, utilisons la méthode informatique. Donnons à la machine des données et demandons-lui de trouver tous les modèles cachés liés au prix.

Et ça fonctionne !! Ce qu'il y a de plus excitant est que la machine fait cette tâche bien mieux qu'une vraie personne qui analyse soigneusement toutes les dépendances dans son esprit.

C'était la naissance de l'apprentissage automatique.

## Les trois composants de l'apprentissage automatique

Le seul but de l'apprentissage automatique est de prédire des résultats basés sur des données d'entrées. Et c'est tout. Toutes les tâches d'apprentissage automatique peuvent être représentées de la sorte, sinon ça signifie que ce n'est pas un problème d'apprentissage automatique dès départ.

Plus vos échantillons sont variés, plus il est simple de trouver le bon modèle et donc de prédire le résultat. Nous avons donc besoin de trois composants pour apprendre à la machine.

### Les données (data)

Vous voulez détecter les spams? Obtenez des échantillons de messages de spams. Vous voulez prévoir le cours du marché ? Trouvez l'historique des cours. Vous voulez connaitre les préférences des utilisateurs ? Analysez leurs activités sur Facebook (non Mark, arrête de les collectés, ça suffit !). Plus les données sont variées, meilleur est le résultat. Des dizaines de milliers de lignes de données sont le strict minimum pour les plus désespérés.

Il y a deux manières principales d'obtenir les données :
- de façon manuelle : les données collectées manuellement contiennent moins d'erreur, mais prennent plus de temps à collecter, ce qui est plus couteux en général.
- de façon automatique : vous collectez tout ce que vous trouvez et espérez le meilleur, ce qui est moins coûteux

Certains petits malins comme Google utilisent leurs propres clients pour labelliser gratuitement leurs données. Vous vous souvenez du ReCaptcha qui vous force à "sélectionner tous les symboles de signalisation routière" ? C'est exactement ce qu'ils font. Du travail gratuit ! Sympa. À leur place, je commencerais à mettre de plus en plus de Captcha. Oh, attendez...

Il est extrêmement compliqué de collecter une base de donnée (appelé "dataset" dans le milieu). Elles sont si importantes que les entreprises peuvent même révéler leurs algorithmes, mais rarement leurs datasets.

### Les caractéristiques (features)

Également connus sous le nom de paramètres ou de variables. Ils peuvent correspondre au kilométrage d'une voiture, au genre d'un utilisateur, au cours de l'action ou à la fréquence d'un mot dans un texte. En d'autres termes, ce sont les facteurs que la machine doit étudier.

Quand les données sont stockées dans des tableaux c'est simple, les caractéristiques correspondent au nom des colonnes. Mais qu'est-ce qu'il en ai si vous avez 100Go de photos de chats ? Nous ne pouvons pas considérer chaque pixel comme une caractéristique. C'est pour cela que la sélection des bonnes caractéristiques prend généralement beaucoup plus de temps que toutes les autres parties du ML. C'est aussi la principale source d'erreur. Les êtres de chair et de sang sont toujours subjectif. Ils choisissent les caractéristiques qu'ils jugent "plus importantes". S'il vous plait, évitez d'être humain.


### Les algorithmes

La partie la plus évidente. Tout problème peut être résolu différemment. La méthode choisie influence la précision, les performances et la taille du modèle final. Il faut néanmoins souligner que si les données sont mauvaises, même le meilleur algorithme ne sera d'aucune utilité. C'est ce qu'on appelle parfois "garbage in, garbage out" - si vous entrez de mauvaises données, vous obtiendrez de mauvais résultats. Ne prêtez donc pas trop d'attention au pourcentage de précision, essayez d'abord d'acquérir davantage de données.

<img src="/images/machine-learning-for-everyone/03.jpg">
