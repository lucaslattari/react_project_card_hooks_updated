import React, {useState} from 'react';
import './ChannelHandler.css';

const ChannelHandler = props => {
  const [channelsState, setChannelsState] = useState({
    channels: [
      { avatar: "avatarUD.png", name: "Universo Discreto", description: "Computação" },
      { avatar: "avatarLOH.jpg", name: "Leitura Obrigahistória", description: "História" },
      { avatar: "avatarMDM.jpg", name: "Manual do Mundo", description: "Tecnologia e Ciência" }
    ],
    currentChannelId: 0
  });

  const [channelState, setChannelState] = useState({
    avatar: channelsState.channels[0].avatar,
    name: channelsState.channels[0].name,
    description: channelsState.channels[0].description
  });

  const changeChannel = (newName, newAvatar, newDescription) => {
    let currentChannelID = channelsState.currentChannelId + 1;
    if(currentChannelID > 3) {
      currentChannelID = 0;
    }

    setChannelsState({
      channels: [
        { avatar: "avatarUD.png", name: "Universo Discreto", description: "Computação" },
        { avatar: "avatarLOH.jpg", name: "Leitura Obrigahistória", description: "História" },
        { avatar: "avatarMDM.jpg", name: "Manual do Mundo", description: "Tecnologia e Ciência" },
        { avatar: newAvatar, name: newName, description: newDescription }
      ],
      currentChannelId: currentChannelID
    });

    console.log(currentChannelID)
    setChannelState({
      avatar: channelsState.channels[currentChannelID].avatar,
      name: channelsState.channels[currentChannelID].name,
      description: channelsState.channels[currentChannelID].description,
    });
  }

  const editChannelName = (event) => {
    console.log(event.target.value);
      setChannelState({
        avatar: 'avatarCUSTOM.png',
        name: event.target.value,
        description: "Indefinido",
        channelId: 1
      });
  }

  const styleCard = {
    width: '100%',
  };

  const styleButton = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return(
    <div className="channelComponent">
      <div className="card">
        <img src={channelState.avatar} alt={`Avatar do canal ${channelState.name}`} style={styleCard}/>
        <div className="container">
          <h4><b>{channelState.name}</b></h4>
          <p>{channelState.description}</p>
        </div>
        <button
          type="button"
          onClick={() => changeChannel(props.newName, props.newAvatar, props.newDescription)}
          style={styleButton}>
            Mudar Canal
        </button>
      </div>

      <div className="form">
        <form>
          <label>
            Nome do Canal: <input type="text" onChange={editChannelName} />
          </label>
        </form>
      </div>
  </div>
  );
};

export default ChannelHandler;
