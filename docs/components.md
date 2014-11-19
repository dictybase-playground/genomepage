# Hierarchy
Initially, this is more or less the react component hierarchy to start.
For the naming convention, the component that more or less holds the other
should have the word __container__. The containers which renders html should
have the word __view__.

AppContainer -- Holds the entire application and routing.
    TabsContainer -- Holds all the tabs, their name and ordering.
        SummaryTabContainer - Holds all the panels for __Gene Summary__ tab.
            GeneInfoView - General Information panel.
            GenomicInfoView - Gbrowse/Jbrowse image panel.
            ProductView - Protein information panel.
            GeneLinksView - List of link outs panel.
        ProteinTabContainer - Container for __Protein Information__ tab.
            ProteinInfoView - Panel for general protein information.
            SequenceInfoView - Protein sequence panel.
            ProteinLinksView - Panel for links.
        OrthologTabContainer - Container for __Ortholog__ tab.
            OrthologTableView - Tabular display of orthologs.
        BlastTabContainer - Container for __Blast__ tab.


