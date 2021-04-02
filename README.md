TP Comment interagir avec le protocole Uniswap ?
Uniswap est un protocole ouvert à tous pour réaliser des “swaps” (échanges) automatisés de tokens sur Ethereum.

Uniswap repose sur des smart-contracts dont l'objectif principal est de garantir un maximum de liquidité pour ses utilisateurs. À ce titre, Uniswap permet l'échange via une paire (DAI/ETH par exemple), mais peut également réaliser plusieurs échanges pour réaliser des swaps avec le maximum de liquidités.

Dans ce tp, nous allons voir comment interagir avec ce protocole en Javascript à l’aide d’un SDK et en Solidity.

La v2 d’Uniswap sera utilisée !


Uniswap smart contracts
Factory : le smart contract qui crée les différents markets d’Uniswap et enregistre ces markets.

Pair : le smart contract qui représente chaque market créé par le factory (DAI/ETH par exemple)

Router : le smart contract qui facilite l’utilisation d’Uniswap

ERC20 : Ce sont les différents ERC20 d’Ethereum qu’Uniswap peut interagir avec. Ces smart contracts ne font pas partie de l'architecture du protocole - il s’agit juste d’une interaction.

Désormais, il n’est plus possible de créer des paires avec ETH dans la v2 d’Uniswap (contrairement à la v1). WETH est alors utilisé.

WETH “wrapped ETH” est le token ERC20 backed par ETH -> 1ETH = 1WETH



Comment interagir avec Uniswap en Javascript (Uniswap SDK)

