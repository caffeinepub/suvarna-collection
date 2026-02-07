import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Saree = {
    id : Nat;
    name : Text;
    imageUrl : Text;
    price : Float;
    fabric : Text;
    occasion : Text;
    isOffer : Bool;
    isNewArrival : Bool;
  };

  module Saree {
    public func compare(saree1 : Saree, saree2 : Saree) : Order.Order {
      Text.compare(saree1.name, saree2.name);
    };
  };

  let sarees = Map.empty<Nat, Saree>();

  var nextId = 0;

  public shared ({ caller }) func addSaree(name : Text, imageUrl : Text, price : Float, fabric : Text, occasion : Text, isOffer : Bool, isNewArrival : Bool) : async Nat {
    let id = nextId;
    let saree = {
      id;
      name;
      imageUrl;
      price;
      fabric;
      occasion;
      isOffer;
      isNewArrival;
    };
    sarees.add(id, saree);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getSaree(id : Nat) : async Saree {
    switch (sarees.get(id)) {
      case (null) { Runtime.trap("Saree not found") };
      case (?saree) { saree };
    };
  };

  public query ({ caller }) func getAllSarees() : async [Saree] {
    sarees.values().toArray().sort();
  };

  public query ({ caller }) func getOffers() : async [Saree] {
    sarees.values().filter(func(saree) { saree.isOffer }).toArray();
  };

  public query ({ caller }) func getNewArrivals() : async [Saree] {
    sarees.values().filter(func(saree) { saree.isNewArrival }).toArray();
  };
};
