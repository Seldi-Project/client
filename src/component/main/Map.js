import React from 'react';
import MapData from '../../utils/MapData.json';
import { ReactComponent as LocationIcon } from '../../source/LocationIcon.svg';
import { ReactComponent as GpsIcon } from '../../source/GpsIcon.svg';
import '../../style/map.scss';

export default function Map({ DiagnosisState }) {
  const lat = 36.763902977977544; //37.64337133200386;//37.50482873810884;
  const lon = 127.28172318092714; //127.10638356633262;// 126.95505529128035;

  const key = process.env.REACT_APP_MAP;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false&libraries=services,clusterer`;
  document.head.appendChild(script);

  script.onload = () => {
    window.kakao.maps.load(() => {
      createMap();
    })
  }

  //const filter = "시간" //redux에서 받아올 것
  let container, options, map = null;


  //지도 생성
  const createMap = () => {
    container = document.getElementById("map"); //지도 담을 div
    options = {
      center: new window.kakao.maps.LatLng(lat, lon), //지도 중심 X,Y좌표 정보를 가지고 있는 객체 생성
      level: 3, //확대 수준, 작을수록 범위 좁아짐
    };
    map = new window.kakao.maps.Map(container, options); //지도 생성

    //진단 완료한 유저이면 마커 표시
    if (DiagnosisState) {
      getLocation();
      createMarker();
    }
  }

  //지도 마커 생성
  const createMarker = () => {
    if (MapData.positions) {
      // 마커 클러스터러 생성
      let clusterer = new window.kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 1 // 클러스터 할 최소 지도 레벨 
      });

      let markers = (MapData.positions).map(({ lat, lon }) => {
        return new window.kakao.maps.Marker({
          position : new window.kakao.maps.LatLng(lat, lon)
        });
      });
      clusterer.addMarkers(markers);
    }
  }

  //내 위치 업데이트
  const getGps = () => {
    getLoc();
  }

  //지도 마커 정보 모두 받아오기
  const getLocation = () => {
    
  }

  //F-geolocation 사용자 위치 받아오기
  const getLoc = async () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            alert(error.message);
          },
          {
            enableHighAccuracy: true, //높은 정확도
            maximumAge: 0, //0:항상 최신 위치, Infinity:캐시에 저장된 위치
            timeout: Infinity, //Infinity
          }
        );
      }).then((coords) => {
        console.log(coords);
        return coords;
      });
    }
    alert("GPS를 지원하지 않습니다");
  };


  return (
    <div className="component" id="mapComponent">
      <div id="map"></div>
      {DiagnosisState && 
        <div>
          <span id="gpsIcon" onClick={() => getGps()}><GpsIcon/></span>
          <span id="locationIcon" onClick={() => getLocation()}><LocationIcon/></span>
        </div>
      }
    </div>
  );
};