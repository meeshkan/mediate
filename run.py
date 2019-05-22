import requests
import unmock

def fetchSpotifyArtist():
    opts = unmock.init()
    # opts.save = True
    response = requests.get("https://api.spotify.com/v1/artists")  # will be mocked
    unmock.reset()
    return response


print(f"respose: {fetchSpotifyArtist()}")
