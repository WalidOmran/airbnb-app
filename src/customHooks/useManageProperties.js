/**
 * @layer Business Logic Layer (Custom Hook)
 * @description Manages state and operations for host properties.
 * @functions
 * - fetchProperties (List)
 * - fetchSingleProperty (Detail/Update)
 * - handleAddProperty
 * - handleDeleteProperty
 * - handleUpdateProperty
 */

"use client";

import { propertyService } from "@/services/propertyService";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";


// const initalPropertyData = {
     
//       title: "",
//       description: "",
//       city_id: null,
//       address: "",
//       location: {
//         latitude: 0,
//         longitude: 0
//       },
//       price_per_night: 0,
//       max_guests: 0,
//       images: [],
//       host_id: null,
//       amenities: [ ],
//       review: {
//         rating: 4.7,
//         comment: "Beautiful apartment in a great location, very comfortable stay."
//       }
//     };

const useManageProperties = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const hostId = userId;
  // const GeneralPropertyFunctions = useCallback( async({propertyData, successMes,errorMes}) => {
  //   // Logic to add a new property
  //   setIsLoading(true);
  //   try {
  //     const propertyId = `pro_${Date.now().toString()}`;
  //     const newProperty = {
  //       ...propertyData,
  //       host_id: hostId,
  //       id: propertyId


  //     }
  //     await propertyService.create(newProperty);
  //     toast.success("Property added successfully");
  //     setProperties(prev => [...prev, newProperty]);
  //   }catch (error) {
  //     console.error("Error adding property:", error);
  //     toast.error("Failed to add property");
  //   }finally {
  //     setIsLoading(false);
  //   }
  // },[]);



  const fetchProperties = useCallback( async () => {
    // Logic to fetch properties from the server
    setIsLoading(true);
    try {
      const data = await propertyService.getByHostId(hostId);
      setProperties(data);
     
    } catch (error) {
      console.error("Error fetching properties:", error);
      toast.error("Failed to fetch properties");
    }finally {
      setIsLoading(false);
    }
  }, [hostId]);

  const handleAddProperty = useCallback( async({propertyData}) => {
    if (!hostId) {
      toast.error("You must be logged in to add a property");
      return false;
    }
    // Logic to add a new property
    setIsLoading(true);
    try {
      const payload = {
        ...propertyData,
        host_id: hostId,
      }

      const response = await propertyService.create(payload);

      const savedProperty = response.data || response;

      toast.success("Property added successfully");
      setProperties(prev => [...prev, savedProperty]);
      return true;
    }catch (error) {
      console.error("Error adding property:", error);
      toast.error("Failed to add property");
      return false;
    }finally {
      setIsLoading(false);
    }
  },[hostId]);

  const handleDeleteProperty = useCallback( async (id) => {
    // Logic to delete a property by id
    setIsLoading(true);
    try {
      await propertyService.delete(id);
      setProperties(prev => prev.filter(property => property.id !== id));

      setSelectedId(null);
      toast.success("Property deleted successfully");
    } catch (error) {
      console.error("Error deleting property:", error);
      toast.error("Failed to delete property");
    }finally {
      setIsLoading(false);
    }
  },[setSelectedId]);

  const handleUpdateProperty = useCallback(async (id, updatedData) => {
    
    if (!id) {
        toast.error("Property ID is missing!");
        return false;
      }

    setIsLoading(true);
    try {
      await propertyService.update(id, updatedData);
      setProperties(prev => prev.map(p => p.id === id ? {...p,...updatedData} : p));
      toast.success("Property updated successfully");
      return true;

    } catch (error) {
      console.error("Error updating property:", error);
      toast.error("Failed to update property");
    }finally {
      setIsLoading(false);
    }
  },[]);

  useEffect(()=> {
    fetchProperties();
  },[fetchProperties]);
  return { 
    properties, 
    isLoading,
    selectedId,
    setSelectedId,
    fetchProperties,
    handleAddProperty,
    handleDeleteProperty,
    handleUpdateProperty
  };
}
export default useManageProperties;
