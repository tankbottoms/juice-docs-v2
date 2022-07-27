---
sidebar_position: 9
---

# Subgraph

[juicebox.money](https://juicebox.money) uses [The Graph](https://thegraph.com/) to load data from jbx-protocol contracts without directly querying the blockchain.

Multiple subgraphs are maintained by [Peel](https://discord.gg/b4rpjgGPHX) in a Graph Studio owned by the [Peel Gnosis safe](https://gnosis-safe.io/app/eth:0x0e9D15e28e3De9bB3CF64FFbC2f2F49Da9Ac545B). Only the primary juicebox subgraph has been published to the Graph Network. All others are available to use for free with rate-limited queries are rate-limited.

- **juicebox** - ([Published](https://thegraph.com/explorer/subgraph?id=FVmuv3TndQDNd2BWARV8Y27yuKKukryKXPzvAS5E7htC&view=Overview)) primary mainnet subgraph used by juicebox.money 
- **mainnet-dev** - indexes mainnet jbx-protocol contracts
- **rinkeby-dev** - indexes rinkeby jbx-protocol contracts

## Querying the subgraph

**The Juicebox subgraph schema** is the same on all networks, and can be [found on github](https://github.com/jbx-protocol/juice-subgraph/blob/main/schema.graphql).

For information on structuring graph queries, the [Graph docs](https://thegraph.com/docs/en/querying/querying-the-graph/) should have everything you need. You can also reference the tools used for juicebox.money [here](https://github.com/jbx-protocol/juice-interface/blob/5117545d17c7c2336207381be5b1c46f67fad459/src/utils/graph.ts#L240).


## Avoiding rate-limiting

If you need to use the Juicebox mainnet subgraph in your project without rate-limiting, you can create your own subgraph API key:
- Create your API key at: [API Keys | Subgraph Studio](https://thegraph.com/studio/apikeys/)
- Fund your billing balance at: [Billing | Subgraph Studio](https://thegraph.com/studio/billing/)
- Query the juicebox mainnet subgraph using `https://gateway.thegraph.com/api/<your-api-key>/subgraphs/id/FVmuv3TndQDNd2BWARV8Y27yuKKukryKXPzvAS5E7htC`

More info on Graph query billing [Billing on the Subgraph Studio -  The Graph Docs](https://thegraph.com/docs/en/querying/billing/)

