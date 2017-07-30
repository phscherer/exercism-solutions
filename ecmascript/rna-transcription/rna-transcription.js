export default () => ({
  toRna: (a) => {
    let rnaComplement = '';
    for (let i = 0; i < a.length; i++) {
      let nucleotide = a[i];
      if (nucleotide !== 'G' && nucleotide !== 'C' && nucleotide !== 'T' && nucleotide !== 'A') {
        throw new Error('Invalid input DNA.');
      }

      if (nucleotide === 'G')
        rnaComplement += 'C';
      if (nucleotide === 'C')
        rnaComplement += 'G';
      if (nucleotide === 'T')
        rnaComplement += 'A';
      if (nucleotide === 'A')
        rnaComplement += 'U';
    }

    return rnaComplement;
  }
});
