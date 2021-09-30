import React from "react";
import { useStyles } from "../utils/uiComponents";
import { Grid } from "@material-ui/core/";

export default function Privacy() {
  const classes = useStyles();
  return (
    <Grid container className={classes.policy}>
      <Grid item xs={12}>
        <div className={classes.policyHeader}>
          What is blockchain technology?
        </div>
        <div className={classes.policyText}>
          The Bitcoin Network is the first successful implementation of
          blockchain technology.
        </div>
        <div className={classes.policyText}>
          The term "blockchain technology" typically refers to the transparent,
          thrustless, publicly accessible ledger that allows us to securely
          transfer the ownership of units of value using public key encryption
          and proof of work methods.
        </div>
        <div className={classes.policyText}>
          The technology uses decentralized consensus to maintain the network,
          which means it is not centrally controlled by a bank, corporation, or
          government. In fact, the larger the network grows and becomes
          increasingly decentralized, the more secure it becomes.{" "}
        </div>

        <div className={classes.policyText}>
          The potential for blockchain technology is not limited to bitcoin. As
          such, it has gained a lot of attention in a variety of industries
          including financial services, charities and non-profits, the arts, and
          e-commerce.
        </div>
        <div className={classes.policyHeader}>
          Why do Stellar addresses have a minimum balance requirement?
        </div>
        <div className={classes.policyText}>
          All Stellar addresses are required to keep a minimum balance of XLM at
          all times. The current minimum is 1 XLM, which is set by the Stellar
          network. The minimum balance requirement is in place in order to
          prevent people from overwhelming the network and to aid in
          prioritization. The first use of a new Stellar address must be to
          receive at least 1 XLM. This will activate the address and allow it to
          be used in further transactions on the network. You will never be able
          to send your entire balance from your Stellar address. That 1 XLM
          minimum will always have to be kept as a balance.
        </div>
        <div className={classes.policyHeader}>Stellar transaction fees</div>
        <div className={classes.policyText}></div>
        <div className={classes.policyText}>
          Like Bitcoin, Ethereum, and Bitcoin Cash, Stellar transactions involve
          fees. What’s different is how Stellar fees are determined, and how
          they are used. For each operation in a Stellar transaction, there is a
          base fee, which is a standard set by the network. The fee acts as a
          deterrent, ensuring that malicious actors cannot spam the network in a
          denial of service (DoS) attack.
        </div>
        <div className={classes.policyText}>
          The base fee per operation is currently set to .00001 XLM. The more
          operations your transaction includes, the higher your fee will be. For
          example, if all you’re doing is sending XLM from one address to
          another, your fee will be .00001 XLM. However, if your transaction was
          more complex, like an exchange between currencies, then a higher fee
          would be required.
        </div>
        <div className={classes.policyText}>
          Since Stellar does not rely on mining to add transactions to the
          global ledger, transaction fees are pooled and then redistributed in
          the form of inflation. In Stellar’s protocol, new lumens (XLM) are
          added to the network at a rate of 1% each year via a built-in, fixed
          inflation mechanism. The inflation funds are sent to an address chosen
          by the network to receive it each week
        </div>
        <div className={classes.policyHeader}>What is Stellar?</div>
        <div className={classes.policyText}>
          Stellar is an open-source, decentralized payment protocol that allows
          for fast, cross-border transactions between any pair of currencies.
          Like other cryptocurrencies, it operates using blockchain technology.
          Its native asset, a digital currency, is called lumen (XLM). XLM
          powers the Stellar network and all its operations, similarly to how
          ether (ETH) powers the Ethereum network.
        </div>
        <div className={classes.policyHeader}>
          How does Stellar’s blockchain work?
        </div>
        <div className={classes.policyText}>
          Stellar is an open-source, decentralized payment protocol that allows
          for fast, cross-border transactions between any pair of currencies.
          Like other cryptocurrencies, it operates using blockchain technology.
          Its native asset, a digital currency, is called lumen (XLM). XLM
          powers the Stellar network and all its operations, similarly to how
          ether (ETH) powers the Ethereum network.
        </div>
        <div className={classes.policyHeader}>
          How does Stellar’s consensus method work?
        </div>
        <div className={classes.policyText}>
          Stellar is an open-source, decentralized payment protocol that allows
          for fast, cross-border transactions between any pair of currencies.
          Like other cryptocurrencies, it operates using blockchain technology.
          Its native asset, a digital currency, is called lumen (XLM). XLM
          powers the Stellar network and all its operations, similarly to how
          ether (ETH) powers the Ethereum network.
        </div>
        <div className={classes.policyHeader}>
          Where is the value of Stellar derived from?
        </div>
        <div className={classes.policyText}>
          Stellar is useful and valuable because it is a global exchange
          network, capable of hosting thousands of exchanges between currencies
          and tokens per second. Exchanging between cryptocurrencies and/or fiat
          currencies can be a lengthy and expensive process; Stellar makes
          exchanging swift and cheap. XLM, the asset that will be supported
          within the Blockchain.com Wallet, is used to pay transaction fees and
          maintain accounts on the Stellar network.{" "}
        </div>
        <div className={classes.policyHeader}>Public and private keys</div>
        <div className={classes.policyText}>
          Bitcoin, as well as all other major cryptocurrencies that came after
          it, is built upon public-key cryptography, a cryptographic system that
          uses pairs of keys: public keys, which are publicly known and
          essential for identification, and private keys, which are kept secret
          and are used for authentication and encryption.{" "}
        </div>
        <div className={classes.policyText}>
          Major cryptocurrencies like Bitcoin, Ethereum, and Bitcoin Cash
          function using three fundamental pieces of information: the address,
          associated with a balance and used for sending and receiving funds,
          and the address’ corresponding public and private keys. The generation
          of a bitcoin address begins with the generation of a private key. From
          there, its corresponding public key can be derived using a known
          algorithm. The address, which can then be used in transactions, is a
          shorter, representative form of the public key.{" "}
        </div>
        <div className={classes.policyText}>
          The private key is what grants a cryptocurrency user ownership of the
          funds on a given address. The Blockchain wallet automatically
          generates and stores private keys for you. When you send from a
          Blockchain wallet, the software signs the transaction with your
          private key (without actually disclosing it), which indicates to the
          entire network that you have the authority to transfer the funds on
          the address you’re sending from.{" "}
        </div>
        <div className={classes.policyText}>
          The security of this system comes from the one-way street that is
          getting from the private key to the public address. It is not possible
          to derive the public key from the address; likewise, it is impossible
          to derive the private key from the public key. In the Blockchain.com
          Wallet, your 12-word Secret Private Key Recovery Phrase is a seed of
          all the private keys of all the addresses generated within the wallet.
          This is what allows you to restore access to your funds even if you
          lose access to your original wallet. Using the recovery phrase will
          allow you to recover your crypto.{" "}
        </div>
        <div className={classes.policyHeader}>What Is Soft Cap?</div>
        <div className={classes.policyText}>
          Soft cap refers to the minimum defined limit for the collection of
          funds specified by a project's team for its fund-raising (ICO, IEO,
          etc.). It is speculative in nature and arbitrarily defined. This is in
          contrast to a hard cap, which is the maximum possible funding that a
          team is looking to collect.
        </div>
        <div className={classes.policyHeader}>What Is Hard Cap?</div>
        <div className={classes.policyText}>
          A hard cap is the limit placed by a blockchain's code on the absolute
          maximum supply of a particular cryptocurrency, A hard cap doesn't
          allow any further creation/circulation of its units. It is generally
          understood to be positive in nature as it creates scarcity, which
          drives up the value of each token.{" "}
        </div>
      </Grid>
    </Grid>
  );
}
