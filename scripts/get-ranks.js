// This generates the CSS properties for the ranks.
// After generated, this should replace `theme/css/ranks.css`
toFile(
    java.util.Arrays.stream(net.farlands.sanctuary.data.Rank.values())
    .map(r => `span.label.${r.name().toLowerCase()} {${r.isStaff() ? '\nfont-weight: bold;' : ''}
    color: ${r.color().asHexString()};
    content: "${r.name}";
}

span.name.${r.name().toLowerCase()} {
    color: ${r.nameColor().asHexString()};
}\n`)
    .collect(java.util.stream.Collectors.joining('\n'))
)


// This generates the Markdown table for the ranks.
// It requires a lot of manual post-processing to fit into the page, but I'm
// okay with that since it shouldn't need to run very frequently.
toFile(
(() => {
    let out = '';
    const ranks = java.util.Arrays.stream(net.farlands.sanctuary.data.Rank.values()).toList();
    const longestRank = ranks.stream().map(r => r.name.length()).max((a, b) => a - b).get() + '<rank class=""/>'.length();
    const advs = ranks.stream().map(r => !r.advancement ? '' : getField('advancement', r)).toList();
    const longestAdv = advs.stream().map(r => r.length()).max((a, b) => a - b).get();
    const longestPlaytime = 'Playtime'.length();
    const dbg = (n) => {console.log(n); return n};
    out += dbg(`| %-${longestRank}s | %-${longestAdv}s | %-${longestPlaytime}s |\n`).formatted('Rank', 'Advancement', 'Playtime');
    out += '| ' + '-'.repeat(longestRank) + ' | ' + '-'.repeat(longestAdv) + ' | ' + '-'.repeat(longestPlaytime) + ' |\n';
    for (let i = 0; i < ranks.size(); i ++) {
        const r = ranks.get(i);
        out += `| %-${longestRank}s | %-${longestAdv}s | %-${longestPlaytime}s |\n`.formatted(`<rank class="${r.name().toLowerCase()}"/>`, !(a = getField('advancement', r)) ? '' : a, r.playTimeRequired <= 0 ? '' : r.playTimeRequired);
    }
    return out;
})()
);
