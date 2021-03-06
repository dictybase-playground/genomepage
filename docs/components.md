# Hierarchy
Initially, this is more or less the react component hierarchy to start.
For the naming convention, the component that more or less holds the other
should have the word __Container__. The containers which renders html should
have the word __View__.

```
AppContainer -- Holds the entire application(all the tabs) and routing.
    SummaryTabContainer - Holds all the panels for __Gene Summary__ tab.
        GeneInfoView - General Information panel.
        GenomicInfoView - Gbrowse/Jbrowse image panel.
        ProductView - Protein information panel.
        GeneLinksView - List of link outs panel.
    PolypeptideTabContainer - Container for __Protein Information__ tab.
        ProteinInfoView - Panel for general protein information.
        SequenceInfoView - Protein sequence panel.
        ProteinLinksView - Panel for links.
    OrthologTabContainer - Container for __Ortholog__ tab.
        OrthologTableView - Tabular display of orthologs.
    BlastTabContainer - Container for __Blast__ tab.
```

