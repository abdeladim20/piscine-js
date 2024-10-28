function getAcceleration(object) {
    if (object.f !== undefined && object.m !== undefined) {
        let a = (object.f / object.m);
        return a;
    } else if (object.Δv !== undefined && object.Δt !== undefined) { 
        let a = (object.Δv / object.Δt); 
        return a; 
    } else if (object.d !== undefined && object.t !== undefined) { 
        let a = ((object.d * 2) / (object.t * object.t)); 
        return a; 
    }
    return "impossible"
}