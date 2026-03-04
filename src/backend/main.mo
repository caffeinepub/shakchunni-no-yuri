import Time "mo:core/Time";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";

actor {
  type Tribute = {
    id : Nat;
    message : Text;
    author : Text;
    timestamp : Time.Time;
  };

  module Tribute {
    public func compare(t1 : Tribute, t2 : Tribute) : Order.Order {
      Int.compare(t2.timestamp, t1.timestamp);
    };
  };

  var nextId = 0;
  let tributesMap = Map.empty<Nat, Tribute>();

  public shared ({ caller }) func leaveTribute(message : Text, author : Text) : async () {
    if (message.size() <= 0) { Runtime.trap("Message cannot be empty.") };
    if (author.size() <= 0) { Runtime.trap("Author name cannot be empty.") };

    let tribute : Tribute = {
      id = nextId;
      message;
      author;
      timestamp = Time.now();
    };

    tributesMap.add(nextId, tribute);
    nextId += 1;
  };

  public query ({ caller }) func getAllTributes() : async [Tribute] {
    tributesMap.values().toArray().sort();
  };
};
