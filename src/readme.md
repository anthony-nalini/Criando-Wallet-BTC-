# Gerador de Carteira Bitcoin HD (Testnet)

Este projeto é um script em **Node.js** que gera uma **carteira Bitcoin determinística (HD Wallet)** utilizando os padrões **BIP32**, **BIP39** e **bitcoinjs-lib**.
Por padrão, ele opera na **Bitcoin Testnet**, sendo ideal para **estudos, testes e aprendizado**, sem risco financeiro real.

---

## 📌 O que este código faz

O script executa os seguintes passos:

1. Gera uma **seed phrase (mnemonic)** seguindo o padrão BIP39.
2. Converte essa seed em uma **seed binária**.
3. Cria uma **carteira HD (Hierarchical Deterministic)** usando BIP32.
4. Deriva uma conta seguindo um **path específico para Testnet**.
5. Gera:

   * Endereço Bitcoin (P2PKH)
   * Chave privada (em formato WIF)
   * Seed phrase (mnemonic)

Ao final, todas essas informações são exibidas no terminal.

---

## ⚠️ Atenção importante

* **Nunca use este código em produção sem adaptações de segurança**
* **Nunca compartilhe sua seed ou chave privada**
* O código gera tudo **em memória**, sem criptografia ou armazenamento seguro
* Ideal apenas para **ambiente de testes e aprendizado**

---

## 🔧 Tecnologias e bibliotecas utilizadas

* **Node.js**
* **bip32** – Derivação de carteiras HD
* **bip39** – Geração de mnemonic (seed phrase)
* **bitcoinjs-lib** – Criação de endereços e chaves Bitcoin

---

## 📦 Instalação

1. Inicialize um projeto Node.js:

```bash
npm init -y
```

2. Instale as dependências:

```bash
npm install bip32 bip39 bitcoinjs-lib
```

---

## ▶️ Como executar

Salve o código em um arquivo, por exemplo:

```bash
wallet.js
```

Execute com:

```bash
node wallet.js
```

---

## 📤 Saída esperada no terminal

```text
Carteira Gerada
Endereço:  mxKpY7Qn6QXy... (Exemplo)
Chave Privada:  cVxZKp8F... (Exemplo)
Seed:  word1 word2 word3 ... word12 (Exemplo)
```

### Significado das informações:

* **Endereço**
  Endereço Bitcoin na Testnet (P2PKH)

* **Chave Privada (WIF)**
  Pode ser importada em carteiras compatíveis (apenas para Testnet)

* **Seed (Mnemonic)**
  Conjunto de palavras que permite restaurar toda a carteira HD

---

## 🌐 Testnet vs Mainnet

Atualmente o código está configurado para **Testnet**:

```js
const network = bitcoin.networks.testnet
```

### Para usar na rede principal (Mainnet):

1. Altere a rede:

```js
const network = bitcoin.networks.bitcoin
```

2. Altere o path de derivação:

```js
m/49'/0'/0'/0
```

⚠️ **Use Mainnet apenas se souber exatamente o que está fazendo.**

---

## 📚 Objetivo educacional

Este projeto é indicado para quem deseja aprender sobre:

* Carteiras HD (Hierarchical Deterministic)
* Seed phrases (BIP39)
* Derivação de chaves (BIP32)
* Estrutura básica de endereços Bitcoin
* Funcionamento da Testnet

---

## 📜 Licença

Uso livre para **estudo e aprendizado**.
Sem garantias de segurança ou adequação para produção.

---
