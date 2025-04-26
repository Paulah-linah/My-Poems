// Example poems
const poems = [
    {
      title: "The Forest",
      image: "https://images.unsplash.com/photos/fountain-pen-on-spiral-book-xG8IQMqMITM",
      text: `The forest is deep and still
  A path leads through the trees
  Leaves whisper in the breeze
  Nature’s design in every hill`
    },
    {
      title: "Solitude",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      text: `In solitude, I find my peace
  Silence speaks, and thoughts release
  A quiet moment to restore
  Away from life’s unending chore`
    },
    {
      title: "To the Sea",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text: `I speak to the sea
  To the waves that roar and roll
  In its depths, I find my soul
  Eternal and wild, vast and free`
    }
  ];
  
  // Render poems
  const container = document.getElementById('poemContainer');
  
  poems.forEach(poem => {
    const card = document.createElement('div');
    card.className = 'card';
  
    card.innerHTML = `
      <img src="${poem.image}" alt="${poem.title}">
      <div class="card-content">
        <div class="card-title">${poem.title}</div>
        <div class="card-poem">${poem.text.replace(/\n/g, '<br>')}</div>
      </div>
    `;
  
    container.appendChild(card);
  });
  