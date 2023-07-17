# Donations

Donations are processed through Tebex.

Donations are not required, but are truly appreciated!

All donations go towards paying for server related bills.

All donations are final -- no refunds will be issued.

All donations are cumulative.  This means that if you donate 10 USD now
for the {{#rank donor}} rank and donate 20 USD later, you'll be
ranked up to {{#rank patron}}.

You can donate [here](https://farlandsdonations.tebex.io).

View the donor ranks and their perks [here](../ranks.md#donor-ranks).

## Donors

Thank you to all of our wonderful donors!

<div id="donor-list" style="padding-left: 2rem">
Loading...
</div> 

<script>
const div = document.querySelector('#donor-list');

const rank_name = (rank) => {
    switch(rank.toUpperCase()) {
        case 'JR_BUILDER': return 'Jr. Builder'
        case 'JR_MOD': return 'Jr. Mod'
        case 'JR_DEV': return 'Jr. Dev'
        default: return rank[0].toUpperCase() + rank.toLowerCase().substring(1)
    }
}

const playermapper = ({ username, uuid, rank }) => {
    return `{{#rank initiate}} {{#rank initiate nameasdf}}`
        .replaceAll('Initiate', rank_name(rank))
        .replaceAll('initiate', rank.toLowerCase())
        .replaceAll('nameasdf', username)
};

(async () => {
    try {
        const res = await fetch('/api/donors');
        const out = await res.json();
        div.innerHTML = out.map(playermapper).join('<br><br>');
    } catch (e) {
        div.innerHTML = '<span style="color: #d7493d">Unable to fetch donors, try again later.</span>';
        console.error(e);
    }
})();

</script>
