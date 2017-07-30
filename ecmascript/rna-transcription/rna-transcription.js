const rna = {'G' : 'C', 'C' : 'G', 'T' : 'A', 'A' : 'U'};
export default class RnaTranscription {
  toRna(a) {
    a.split("").map(letter => {
      if (letter !== 'G' && letter !== 'C' && letter !== 'T' && letter !== 'A') {
        throw new Error('Invalid input DNA.');
      }
    });
    
    return a.split("").map(dna => rna[dna]).join('');
  }
}
